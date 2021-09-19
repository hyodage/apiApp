import user from '../api/user.js'
export default () => {
    return {
        get: [
            {path: `/user`, content: user()}
        ]
    }
}
