import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    post: Post;
}

export default function Show({ post }: Props) {
    return (
        <div className="py-12">
            <div className="container mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">{post.content}</p>
                        <p className="text-muted-foreground mb-4 text-sm">Created on: {new Date(post.created_at).toLocaleDateString()}</p>
                        <div className="flex items-center space-x-4">
                            <Link href={route('posts.index')}>
                                <Button variant="outline">Back to Posts</Button>
                            </Link>
                            <Link href={route('posts.edit', post.id)}>
                                <Button variant="secondary">Edit Post</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
