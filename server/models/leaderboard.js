const pool = require('../Pool.js');

module.exports = {
  readLeaders: () => {
    let q =
      'SELECT first_name, last_name, visit_count, total_mins FROM users ORDER BY total_mins DESC';
    return pool
      .connect()
      .then((client) => {
        return client
          .query(q)
          .then((res) => {
            client.release();
            return res;
          })
          .catch((err) => {
            client.release();
            console.log(err);
          });
      })
      .catch((err) => {
        console.log('Error getting leaderboard data: ', err);
      });
  },
};
