import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Link, useForm } from '@inertiajs/react';
import React from 'react';

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

export default function Edit({ post }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        content: post.content,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('posts.update', post.id));
    };

    return (
        <div className="py-12">
            <div className="container mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Edit Post</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="mt-1"
                                />
                                {errors.title && <div className="text-destructive">{errors.title}</div>}
                            </div>
                            <div>
                                <Label htmlFor="content">Content</Label>
                                <Textarea id="content" value={data.content} onChange={(e) => setData('content', e.target.value)} className="mt-1" />
                                {errors.content && <div className="text-destructive">{errors.content}</div>}
                            </div>
                            <div className="flex items-center space-x-4">
                                <Button type="submit" disabled={processing}>
                                    Update
                                </Button>
                                <Link href={route('posts.index')}>
                                    <Button variant="outline">Back</Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
