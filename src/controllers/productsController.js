
const productosController =  {

    anafes: (req,res)=>{
    res.render("./productos/anafes");
},

    heladeras: (req,res)=>{
    res.render("./productos/heladeras");
},

    cocinas: (req,res)=>{
    res.render("./productos/cocinas");
},

    freezers: (req,res)=>{
    res.render("./productos/freezers");
},

    lavarropas: (req,res)=>{
    res.render("./productos/lavarropas");
},

    lavavajillas: (req,res)=>{
    res.render("./productos/lavavajillas");
},

    microondas: (req,res)=>{
    res.render("./productos/microondas");
}, 
};

module.exports = productosController;