const Player=require('../models/Player.model');

exports.createPlayer = (req, res, next) => {
    const player = new Player({
        nom: req.body.nom,
        prénom: req.body.prénom,
        img: req.body.img,
        age: req.body.age,
        sexe: req.body.sexe,
        taille:req.body.taille,
        club:req.body.club
      });
      player.save().then(
        () => {
          res.status(201).json({
            message: 'Post saved successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
    
};

exports.getOnePlayer = (req, res, next) => {
    Player.findOne({
        _id: req.params.id
      }).then(
        (player) => {
          res.status(200).json(player);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );
};

exports.modifyPlayer = (req, res, next) => {
    const player = new Player({
        _id: req.params.id,
        nom: req.body.nom,
        prénom: req.body.prénom,
        img: req.body.img,
        age: req.body.age,
        sexe: req.body.sexe,
        taille:req.body.taille,
        club:req.body.club
      });
      Player.updateOne({_id: req.params.id}, player).then(
        () => {
          res.status(201).json({
            message: 'player updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
};

exports.deletePlayer = (req, res, next) => {
    Player.deleteOne({_id: req.params.id}).then(
        () => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
};

exports.getAllplayers = (req, res, next) => {
  Player.find().then(
    (players) => {
      res.status(200).json(players);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};