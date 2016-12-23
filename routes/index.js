var mongoose = require('mongoose');
var stuff = mongoose.model('Usr');



exports.main = ( req, res, next ) => {

   stuff.
       find().
       sort('-date').
       exec(( err, blam, count ) => {

         res.render( 'main', {
           title : "Guestbook",
           blam : blam
         });
   });
};

exports.create = ( req, res ) => {
  new stuff({
    message    : req.body.message,
    updated_at : Date.now()
   })
    .save(( err, duh, count ) => {
        res.redirect( '/main' );
      });
};

exports.destroy = ( req, res ) => {
  stuff.findById( req.params.id, ( err, duh ) => {
    duh.remove( ( err, duh ) => {
      res.redirect( '/main' );
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
    duh.updated_at = Date.now();
    duh.save( ( err, todo, count ) => {
      res.redirect( '/main' );
    });
  });
};
