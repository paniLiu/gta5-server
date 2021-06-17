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


Delay = (ms) => new Promise(res => setTimeout(res, ms));

RegisterCommand('car', async (source, args, raw) => {

    let model = "adder";

    if (args.length > 0) {
        model = args[0].toString();
    }

    const hash = GetHashKey(model);
    if (!IsModelInCdimage(hash) || !IsModelAVehicle(hash)) {
        emit('chat:addMessage', {
            args: [`It might have been a good thing that you tried to spawn a ${model}. Who even wants their spawning to actually ^*succeed?`]
        });
        return;
    }

    RequestModel(hash);
    while (!HasModelLoaded(hash)) {
        await Delay(500);
    }

    const ped = PlayerPedId();

    const coords = GetEntityCoords(ped);

    const vehicle = CreateVehicle(hash, coords[0], coords[1], coords[2], GetEntityHeading(ped), true, false);

    SetPedIntoVehicle(ped, vehicle, -1);

    SetEntityAsNoLongerNeeded(vehicle);
    SetModelAsNoLongerNeeded(model);
    
    emit('chat:addMessage', {
        args: [
            `I wish I could spawn this ${(args.length > 0 ? `${args[0]} or ` : ``)} adder but owner was too lazy. :(`,
        ]
    });
}, false);