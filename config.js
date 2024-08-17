//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348152828676";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxHNWU0UHJ1ZXhvTlRSNHh4UUJaYlRPWFA3Kzh4eW1aQnFEYzFnTXIybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblQzY1IwdjZSK2RDTVVBQUhiYmhGK0dkckRCZzhUNkVPeE1NT2lyUEltVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSmw2cHpNOC9IdnpodXlxWkR5eGt0c2tlKzB6UmxONVNaWTBCTFpMa1dvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVOTk2ZndMaEc0ZmU3emZFaVZDYlo3dXJNTXN0cHJZOEI3b1lBWHFNNUVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMQkx5RER3QUFaVEh2c3MwM2YxUnh1Rkh1Q3JBVFFoNkhGTkhja2srM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpmNS9aQVhJRzZiWUVyQ2dQRFNENUJoM0ZZS0g3ZHVJRnBhL1dZTm92QjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ozQlBINEs3MXM3Uk96ckNQMjB3d1J2b3BaNXBTK2ZpVFJ6bnFNRjJuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmFHNHllOHpDMCtMNGNqdVowTG1ubVRNU2kzc0lyVGtxREk0Y1Uxb3ZnOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd6eTNxS3Y3S1U1dEYrZG83b2xaYWpIYzBqSTlKeGpBZnR5Q3RrQVhhdlNjL0g4aUV1djVZTzkvNUh5ZGNUaWhYLytoM0doT3pMWW1saTRPK3U5WGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6InZXMXgrWHQ1ZVkwZCtxUTB2aTIweWlxbjQwcnpmVVlFUkp6cGtqOXNLMTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE1MjgyODY3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMzcxNDYxRTJCOTk2RkU3NzlDMTNFMDQ3RUUyODhGRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzODgxMzgyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTUyODI4Njc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZFMTJBQkQzRTkzQTU3OTQ1NTFFODYzRTM1NDY2NUEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM4ODEzODN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZrM1E2aktfUXAtMGN6RUxJZm9yb3ciLCJwaG9uZUlkIjoiODFhYTY3YWEtMmQwNC00NDhlLTliNjYtMWZlYjFiY2RmZDNhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdmTDgwcE1OMEtySFozbE82Y2p6d0kyeWVVdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIQkVjcnlwWXArR1R6RGJxd241VTNnMkZ1Y1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVE5INkYzOUwiLCJtZSI6eyJpZCI6IjIzNDgxNTI4Mjg2NzY6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQcmlubmNlIEdvZHdpbiAyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQU3Ewd3dRa3ErQnRnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJETDV0alJ2Q0pCdDdUVWFwUjlhZXA0UUwxaFgwQi80eXY2RkFOaW1yb2lzPSIsImFjY291bnRTaWduYXR1cmUiOiJpOW5jZCt2WFlOTDhPczF0MExCbWdWY3YxTGtvd01lYUZmRlRaTTdWb0lLU24rUFM5YmpLeVNjZkJCL1NHYmUySXRqUzk5QXlWVWFMVEhzVVZiSnBCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNVdzSUxQaTRZbW1mdlYzejI1ZVVxeUg0aDBwcXhrT2V6RVZPaXNrQ1QwZlNKbTRPb080b0lFckRHZ2JHYmhxQ0tkOGFiamRtM2NoVHdSMCtydEo3aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTUyODI4Njc2OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXkrYlkwYndpUWJlMDFHcVVmV25xZUVDOVlWOUFmK01yK2hRRFlwcTZJciJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzg4MTM3NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQVjEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
