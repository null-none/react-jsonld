# reactjs-text-to-image
json-ld with ReactJS

## Install

```bash
npm install react-jsonld
```

## Example

```javascript
import JsonLd from 'react-jsonld';

...
const data = {
  "@context": "http://json-ld.org/contexts/person.jsonld",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
};

<JsonLd data={data} />
...

```

## License

MIT

## Donation Button

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YYZQ6ZRZ3EW5C)