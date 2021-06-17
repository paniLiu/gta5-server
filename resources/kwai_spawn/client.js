const spawnPos = [686.245, 577.950, 130.461];

on('onClientGameTypeStart', () => {
    exports.spawnmanager.setAutoSpawnCallback(() => {
        exports.spawnmanager.spawnPlayer({
            x: spawnPos[0],
            y: spawnPos[1],
            z: spawnPos[2],
            model: 'a_m_m_skater_01',
        }, () => {
            emit('chat:addMessage', {
                args: [
                    '欢迎来到Kwai Staff 自由都市！'
                ]
            })
        });
    });

    exports.spawnmanager.setAutoSpawn(true)
    exports.spawnmanager.forceRespawn()
})

RegisterCommand('car', (source, args, raw) => {
    emit('chat:addMessage', {
        args: [
            `I wish I could spawn this ${(args.length > 0 ? `${args[0]} or ` : ``)} adder but owner was too lazy. :(`,
        ]
    });
}, false);