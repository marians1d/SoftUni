import Box from './keyValuePairs'

const kvp = new Box<number, string>();

kvp.setKeyValue(1, 'Pesho');

kvp.display();