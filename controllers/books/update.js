const Book = require('../../db/models/Book')
const User = require('../../db/models/User')

module.exports = router => {
    router.put('/:id', async ctx => {
        const body = ctx.request.body
        let fields = {}
        Book.getfields().forEach(f => {
            if (body[f])
                fields[f] = body[f]
        })
        if (Object.keys(fields).length === 0) {
            ctx.body = 'Нет полкй для обновления'
            return
        }
        if (fields.author)
            fields.author_id = await User.create({ name: author })
        ctx.body = await Book.update(`id=${ctx.params.id}`, fields)
    })
}
