const io = require('socket.io')();

const eventData = {
    randomNumber: Math.random()
};

io.on('connection', client => {
    setInterval(() => {
        client.emit('message', {
            id: "5cd67e06ed59c04eccbca1c2",
            bandwidth_out:Math.random(),
            uptime: Math.random(),
            gpu: Math.random(),
            memory_total:Math.random(),
            version:Math.random(),
            timestamp:Math.random(),
            bandwidth_in:Math.random(),
            load_average:Math.random(),
            cpu: Math.random(),
            hdd_free: Math.random(),
            memory_free: Math.random(),
            memory_available: Math.random(),
            status: Math.random(),
            hdd_total: Math.random()}
            );
    }, 3000);


    // client.on('event', data => {
    //     console.log('event');
    // });
    //
    // client.on('disconnect', () => {
    //     console.log('disconnect');
    // });

});

io.listen(3005);

