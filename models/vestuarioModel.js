const db = require('../config/db');

const Vestuario = {
    create: (vestuario, callback) => {
        const query = 'INSERT INTO vestuario (nome, descricao) VALUES (?, ?)';
        db.query(query, [vestuario.nome, vestuario.descricao], (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM vestuario WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },

    update: (id, vestuario, callback) => {
        const query = 'UPDATE vestuario SET nome = ?, descricao = ? WHERE id = ?';
        db.query(query, [vestuario.nome, vestuario.descricao, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM vestuario WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM vestuario';
        db.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
};

module.exports = Vestuario;