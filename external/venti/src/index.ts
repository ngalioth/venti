import { Context, Schema } from "koishi";

export const name = "venti";

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  // write your plugin here
  ctx
    .command("gi")
    .action((_, message) => "原神功能入口，目前还没实际功能等待完善");

  ctx
    .command("hsr")
    .action((_, message) => "铁道功能入口，目前还没实际功能等待完善");
  ctx
    .command("dst")
    .action((_, message) => "饥荒功能入口，目前还没实际功能等待完善");
}
