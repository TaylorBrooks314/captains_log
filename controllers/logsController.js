
const Logs = require('../models/logs')

module.exports.index = async (req, res) => {
    try {
        const logs = await Logs.find()
        res.render('Index', { logs })

    } catch (error) {
        console.error(error)
        res.status(404).send('Server Error')
    }


}

module.exports.new = (req, res) => {
    res.render('New')
}

module.exports.create = async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        await Logs.create(req.body)
        res.redirect('/logs')
    } catch (error) {
        console.error(error)
        res.status(404).send('Server Error')
    }
}

module.exports.show = async (req, res) => {
    const log = await Logs.findById(req.params.id)
    res.render('Show', { log })
}

module.exports.delete = async (req, res) => {
    try {
        const deletedLog = await Logs.findByIdAndDelete(req.params.id);
        if (!deletedLog) {
            return res.status(404).send('Log not found');
        }
        res.redirect('/logs'); // Redirect to index page after deletion
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
module.exports.edit = async (req, res) => {
    try{
    let log = await Logs.findById(req.params.id)
    // if (log.shipIsBroken === true) {
    //     log.shipIsBroken = 'on'
    // } else {
    //     log.shipIsBroken = 'off'
    // }
    res.render('Edit',{log})
    }catch(err){
        console.log(err.message)
    }
};
module.exports.update = async (req, res) => {
    try{
    await Logs.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/logs')
    }catch(err){
        console.log(err.message)
    }
};