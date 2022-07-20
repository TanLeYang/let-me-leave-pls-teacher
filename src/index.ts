import path from 'path'
import MTProto from '@mtproto/core' 
import { telegramConfig } from './config'

const mtproto = new MTProto({
    api_id: telegramConfig.apiId,
    api_hash: telegramConfig.apiHash,
    storageOptions: {
        path: path.resolve(__dirname, './data/1.json'),
    },
    test: false
})

mtproto.call('help.getNearestDc')
    .then((result: any) => {
        console.log('country: ', result.country)
    })
    .catch((err: any) => {
        console.log(err)
    })
