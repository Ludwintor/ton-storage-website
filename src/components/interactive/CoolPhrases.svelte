<script lang="ts">
    let phrases = [
        "yea that's me!",
        "although there's no DNA evidence to back it up",
        "according to the NDA i had to sign",
        "or ludwintor for short",
        "why are you clicking on me",
        "do something cool today!",
        "or is it?"
    ];
    let next = 0;
    let selected = $state(pickNext());

    function pickNext(): string {
        if (next === 0) {
            for (let i = phrases.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [phrases[i], phrases[j]] = [phrases[j], phrases[i]];
            }
        }
        const result = phrases[next];
        next = (next + 1) % phrases.length;
        return result;
    }
</script>

<button
    class="inline cursor-pointer text-xl text-link font-bold text-start"
    onclick={() => selected = pickNext()}
>
    {selected}
</button>
