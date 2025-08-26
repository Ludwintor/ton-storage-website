<script lang="ts">
    import { hexEncode } from "../../utils/hex";

    async function fetchBag() {
        // "\0" as base64 cell `beginCell().storeStringTail("\0").endCell()`
        const subdomain = "te6ccgEBAQEAAwAAAgA=";
        // sha256("site") as decimal
        const category = "113837984718866553357015413641085683664993881322709313240352703269157551621118";
        const response = await fetch("https://toncenter.com/api/v2/runGetMethod", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                address: "0:7e664d95714bd66e7674afd91087ec42d76c7f3a1861417e6ae1c00313719539",
                method: "dnsresolve",
                stack: [
                    ["tvm.Slice", subdomain],
                    ["num", category]
                ]
            })
        });
        if (!response.ok)
            throw new Error();
        const json = await response.json();
        const result = json["result"];
        if (result["exit_code"] !== 0)
            throw new Error();
        const data = result["stack"][1][1]["object"]["data"]["b64"];
        const hexData = hexEncode(atob(data));
        // first two bytes is a constructor dns_storage_address#7473 bag_id:bits256 = DNSRecord;
        return hexData.slice(4);
    }
</script>

<section>
    <p>website's bag id</p>
    <p class="overflow-hidden overflow-ellipsis">
        {#await fetchBag()}
            rummaging through the blockchain...
        {:then bagId}
            <code>{bagId}</code> (<a href="https://mytonstorage.org/api/v1/gateway/{bagId}">view</a>)
        {:catch}
            oopsie woopsie we made a fucky wucky therefore no bag id for today
        {/await}
    </p>
</section>
