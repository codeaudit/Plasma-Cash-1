'use strict';

import redis from 'lib/redis';
import config from 'config';

import Block from 'lib/model/block';

async function getBlock(blockNumber) {
  try {
    let key = 'block' + blockNumber;
    let data = await redis.getAsync(Buffer.from(key));

    return new Block(data);
  }
  catch(error) {
    if (error.type !== "NotFoundError"){
      throw error;
    }
    return null;
  }
}

module.exports = {
  getBlock
};
