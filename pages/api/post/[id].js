// DELETE /api/post/:id
import prisma from '../../../lib/prismadb.ts'

export default async function handle(req, res) {
    const postId = req.query.id
    if(req.method === "DELETE"){
        const post = await prisma.post.delete({
            where: {id: Number(postId)}
        });
        res.json(post);
    } else {
        throw new Error (
            `The HTTP ${req.method} method is not supported at this route!`
        )
    }
}