const spawnPos = [686.245, 577.950, 130.461];

on('onClientGameTypeStart', () => {
    exports.spawnmanager.setAutoSpanCallback(() => {
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