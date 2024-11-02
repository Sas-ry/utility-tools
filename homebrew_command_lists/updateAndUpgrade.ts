import $ from "https://deno.land/x/dax/mod.ts";
import * as cliffy from "https://deno.land/x/cliffy@v1.0.0-rc.4/ansi/colors.ts";

const cmds = [
    ["brew", "update"],
    ["brew", "upgrade"],
];

for (const cmd of cmds) {
    $.log(cliffy.colors.green(`executing ${cmd}`));
    await $`${cmd}`;
}