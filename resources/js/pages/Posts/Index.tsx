import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useForm } from '@inertiajs/react';

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    posts: Post[];
}

export default function Index({ posts }: Props) {
    const { delete: destroy } = useForm();

    const deletePost = (id: number) => {
        if (confirm('Are you sure you want to delete this post?')) {
            destroy(route('posts.destroy', id));
        }
    };

    return (
        <div className="py-12">
            <div className="container mx-auto">
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold">Posts</CardTitle>
                        <Link href={route('posts.create')}>
                            <Button variant="default">Create Post</Button>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-muted">
                                        <th className="px-4 py-2 text-left">ID</th>
                                        <th className="px-4 py-2 text-left">Title</th>
                                        <th className="px-4 py-2 text-left">Created</th>
                                        <th className="px-4 py-2 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.length > 0 ? (
                                        posts.map((post) => (
                                            <tr key={post.id}>
                                                <td className="border px-4 py-2">{post.id}</td>
                                                <td className="border px-4 py-2">{post.title}</td>
                                                <td className="border px-4 py-2">{new Date(post.created_at).toLocaleDateString()}</td>
                                                <td className="border px-4 py-2">
                                                    <Link href={route('posts.show', post.id)} className="mr-2">
                                                        <Button variant="secondary">View</Button>
                                                    </Link>
                                                    <Link href={route('posts.edit', post.id)} className="mr-2">
                                                        <Button variant="outline">Edit</Button>
                                                    </Link>
                                                    <Button variant="destructive" onClick={() => deletePost(post.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="border px-4 py-2 text-center">
                                                No posts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
