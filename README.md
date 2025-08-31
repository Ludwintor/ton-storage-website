# ton-storage-website
💎💾📄 example website hosted in TON storage

to view TON storage hosted website you must do ONE of the following:
- download and enable the standalone [TON proxy](https://github.com/xssnick/Tonutils-Proxy)
- download the [MyTonWallet browser extension](https://mytonwallet.io), and enable the TON proxy in the app's settings
- visit through http proxy https://ishoneypot-dton.magic.org
- simply send a message in Telegram containing the .ton domain `ishoneypot.ton` and click on it

now you can visit it http://ishoneypot.ton (at least i hope so lol)

## quick start
```
pnpm i
pnpm build
pnpm preview
```
go to http://localhost:4321

## how to host in TON storage

upload your website folder to https://mytonstorage.org and add the generated bag id to your .ton domain's `TON Site` dns record

[read more](src/components/markdown/howto.md)
