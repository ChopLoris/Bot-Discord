const a0_0x3c0af8=a0_0x15ab;(function(_0x1ae919,_0x25be5b){const _0x34069f=a0_0x15ab,_0x10953a=_0x1ae919();while(!![]){try{const _0x111630=-parseInt(_0x34069f(0xfe))/0x1+parseInt(_0x34069f(0xf2))/0x2+parseInt(_0x34069f(0xf3))/0x3+-parseInt(_0x34069f(0x107))/0x4+parseInt(_0x34069f(0x10c))/0x5*(parseInt(_0x34069f(0x104))/0x6)+-parseInt(_0x34069f(0xfb))/0x7+parseInt(_0x34069f(0xf9))/0x8;if(_0x111630===_0x25be5b)break;else _0x10953a['push'](_0x10953a['shift']());}catch(_0x1328e1){_0x10953a['push'](_0x10953a['shift']());}}}(a0_0x2490,0x56abb),require(a0_0x3c0af8(0xff))['config']());const fs=require('fs'),{Client,Intents,Collection}=require(a0_0x3c0af8(0x109)),mysql=require(a0_0x3c0af8(0x114));let config=require(a0_0x3c0af8(0x10d)),connection=mysql[a0_0x3c0af8(0xfc)](config);const client=new Client({'intents':[Intents[a0_0x3c0af8(0xf7)][a0_0x3c0af8(0x10b)],Intents['FLAGS'][a0_0x3c0af8(0x106)],Intents[a0_0x3c0af8(0xf7)]['GUILD_MEMBERS']]}),commandFiles=fs[a0_0x3c0af8(0x103)](a0_0x3c0af8(0xf8))['filter'](_0xeba44d=>_0xeba44d[a0_0x3c0af8(0xf5)](a0_0x3c0af8(0x100))),commands=[];client['commands']=new Collection();for(const file of commandFiles){const command=require(a0_0x3c0af8(0x113)+file);commands[a0_0x3c0af8(0xfd)](command[a0_0x3c0af8(0x108)][a0_0x3c0af8(0x10f)]()),client[a0_0x3c0af8(0x10e)][a0_0x3c0af8(0xfa)](command['data'][a0_0x3c0af8(0x102)],command);}const eventFiles=fs[a0_0x3c0af8(0x103)]('./events')[a0_0x3c0af8(0x110)](_0x38a166=>_0x38a166['endsWith'](a0_0x3c0af8(0x100)));for(const file of eventFiles){const event=require(a0_0x3c0af8(0xf4)+file);event[a0_0x3c0af8(0x111)]?client[a0_0x3c0af8(0x111)](event['name'],(..._0x404f2a)=>event[a0_0x3c0af8(0xf6)](..._0x404f2a,commands)):client['on'](event['name'],(..._0x134a0c)=>event[a0_0x3c0af8(0xf6)](..._0x134a0c,commands));}function a0_0x2490(){const _0x8b76da=['execute','FLAGS','./commands','1966632JOsgrS','set','4017391BPLMFn','createConnection','push','213711NSUiTr','dotenv','.js','login','name','readdirSync','379524cppcGL','TOKEN','GUILD_MESSAGES','634944NiEjBk','data','discord.js','env','GUILDS','40kbgaOu','./db/config.js','commands','toJSON','filter','once','connect','./commands/','mysql','580008vCrTSf','778494rqOjWx','./events/','endsWith'];a0_0x2490=function(){return _0x8b76da;};return a0_0x2490();}function a0_0x15ab(_0x3b5edd,_0xdc14ec){const _0x249099=a0_0x2490();return a0_0x15ab=function(_0x15abf4,_0x85bc4){_0x15abf4=_0x15abf4-0xf2;let _0x1be55d=_0x249099[_0x15abf4];return _0x1be55d;},a0_0x15ab(_0x3b5edd,_0xdc14ec);}connection[a0_0x3c0af8(0x112)](function(_0x4e7082){const _0x5015cf=a0_0x3c0af8;if(_0x4e7082)throw _0x4e7082;client[_0x5015cf(0x101)](process[_0x5015cf(0x10a)][_0x5015cf(0x105)]);});