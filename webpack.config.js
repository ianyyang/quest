import { join } from 'path'

const srcPath = (subdir) => {
    return join(__dirname, "src", subdir)
}

export const resolve = {
    alias: {
        app: srcPath('app'),
        common: srcPath('common'),
        features: srcPath('features'),
        tests: srcPath('tests')
    },
}
