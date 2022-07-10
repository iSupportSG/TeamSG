

const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');

const GoStumble = (code, auth) => new Promise((resolve, reject) => {

    fetch(`http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${code}`, {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log(`███████╗████████╗██╗   ██╗███╗   ███╗██████╗ ██╗     ███████╗
██╔════╝╚══██╔══╝██║   ██║████╗ ████║██╔══██╗██║     ██╔════╝
███████╗   ██║   ██║   ██║██╔████╔██║██████╔╝██║     █████╗  
╚════██║   ██║   ██║   ██║██║╚██╔╝██║██╔══██╗██║     ██╔══╝  
███████║   ██║   ╚██████╔╝██║ ╚═╝ ██║██████╔╝███████╗███████╗
╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚══════╝╚══════╝

By : ${chalk.blueBright('@iSupportSG')} - ${chalk.blueBright('teamsg.my.id')}
Features Exploit :
1. ${chalk.cyanBright('Reward : 1 Crown + 30 Trophy + 35 Star ( Stumble Pass ) + 3000 EXP')}
2. ${chalk.cyanBright('Reward : 20 Trophy + 30 Star ( Stumble Pass ) + 1500 EXP')}
3. ${chalk.cyanBright('Reward : 10 Trophy + 25 Star ( Stumble Pass ) + 500 EXP')}
4. ${chalk.cyanBright('Reward : 20 Star ( Stumble Pass ) + 100 EXP')}

${chalk.greenBright('NOTE: Jangan Gunakan Delay 1000-4000 Karna Akun Kalian Akan Terkena Ban')}
${chalk.greenBright('ENGLISH: Dont use the 1000-4000 delay because your account will be banned')}


`);

    
    const feature = rs.question('[+] Pilih Features: ');

    if (feature == '1') {

        const auth = rs.question('[+] Masukkan Authorization Keys : ');
        const time = rs.question('[+] Masukkan Delay ( Contoh : 5000 = 5 detik ) : ');
        console.log('');

        while (true) {

            var code = '3';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Authorization Keys Salah`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                const crown = data.User.Crowns;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] ${chalk.cyanBright(`Nama Pengguna : ${username}`)} | ${chalk.cyanBright(`Megara : ${country}`)} | ${chalk.redBright(`EXP : ${exp}`)} | ${chalk.redBright(`Pass Star : ${tokenPass}`)} | ${chalk.yellowBright(`Trophy : ${trophy}`)} | ${chalk.yellowBright(`Crown : ${crown}`)}`));
                await delay(time)

            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Our Account Has Ben Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }
        
    } else if (feature == '2') {

        const auth = rs.question('[+] Masukkan Authorization Keys : ');
        const time = rs.question('[+] Masukkan Delay  ( Contoh : 5000 = 5 second ) : ');
        console.log('');

        while (true) {

            var code = '2';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Authorization Keys Salah !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ]  ${chalk.cyanBright(`Nama Pengguna : ${username}`)} |  ${chalk.cyanBright(`Negara : ${country}`)} | ${chalk.redBright(`EXP : ${exp}`)} |  ${chalk.redBright(`Pass Star : ${tokenPass}`)}  | ${chalk.yellowBright(`Piala : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Our Account Has Ben Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '3') {

        const auth = rs.question('[+] Masukkan Authorization Keys : ');
        const time = rs.question('[+] Masukkan Delay ( Contoh : 5000 = 5 detik ) : ');
        console.log('');

        while (true) {

            var code = '1';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Authorization Keys Salah !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] ${chalk.cyanBright(`Nama Pengguna : ${username}`)} |  ${chalk.cyanBright(`Negara : ${country}`)} | ${chalk.redBright(`EXP : ${exp}`)} |  ${chalk.redBright(`Pass Star : ${tokenPass}`)}  | ${chalk.yellowBright(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Our Account Has Ben Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '4') {

        const auth = rs.question('[+] Masukkan Authorization Keys : ');
        const time = rs.question('[+] Masukkan Delay ( Contoh : 5000 = 5 sdetik ) : ');
        console.log('');
        
        while (true) {

            var code = '0';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Authorization Keys Salah !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] ${chalk.cyanBright(`Nama Pengguna : ${username}`)} |  ${chalk.cyanBright(`Negara : ${country}`)} | ${chalk.redBright(`EXP : ${exp}`)} | ${chalk.redBright(`Pass Star : ${tokenPass}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Our Account Has Ben Banned !!`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else {

        console.log(chalk.red(`\n[ ${moment().format('HH:mm:ss')} ] Wrong feature !`));

    }
    

})();
