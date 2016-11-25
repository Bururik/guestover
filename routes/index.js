var mongoose = require('mongoose');
var stuff = mongoose.model('Usr');


exports.index = ( req, res, next ) => {
   stuff.
       find().
       sort('-date').
       exec(( err, blam, count ) => {

         res.render( 'index', {
           title : "Bonjour, c'est un titre rouge",
           blam : blam
         });
   });
};

exports.create = ( req, res ) => {
  new stuff({
    message    : req.body.message,
    date : Date.now()
   })
    .save(( err, duh, count ) => {
        res.redirect( '/' );
      });
};

exports.destroy = ( req, res ) => {
  stuff.findById( req.params.id, ( err, duh ) => {
    duh.remove( ( err, duh ) => {
      res.redirect( '/' );
    });
  });
};

exports.edit = ( req, res ) => {
  stuff.
      find().
      sort('-date').
      exec(( err, blam ) => {
        res.render( 'edit', {
            title   : 'Edit time!!!',
            blam   : blam,
            current : req.params.id
        });
      });
};

exports.update = ( req, res ) => {
  stuff.findById( req.params.id, ( err, duh ) => {
    duh.message    = req.body.message;
    duh.date = Date.now();
    duh.save( ( err, todo, count ) => {
      res.redirect( '/' );
    });
  });
};
