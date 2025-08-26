## how to host websites using TON storage?

### considerations

- you can host <u>only static files</u> in TON storage, so if you're using any kind of SSR, consider SSG-only or you're out of luck
- websites behind .ton domains can only be accessed through Telegram or [in certain ways](https://docs.ton.org/v3/guidelines/web3/ton-proxy-sites/how-to-open-any-ton-site) (ignore ton.run and tonp.io - they are no longer functional)

### steps

now i assume you already have your website's static files

1. purchase a .ton domain on [dns.ton.org](https://dns.ton.org)
2. upload your website folder to [mytonprovider.org](https://mytonstorage.org), select providers, deposit TON (you can withdraw unused TON and top up later), and copy the generated bag id
3. select "manage domain" on your domain page at [dns.ton.org](https://dns.ton.org)
4. paste the bag id from step 2 into the **\`TON Site\`** field, check the \`Hosting in TON Storage\` box, click \`save\`, and send transaction
5. done!

your website will be accessible via your .ton domain soon. it may take some time (approx. 1 hour) for the uploaded bag to become available
