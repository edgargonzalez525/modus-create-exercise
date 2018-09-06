interface Timezone {
  offset: string;
  description: string;
}

interface CoordinatesValue {
  latitude: string;
  longitude: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Id {
  name: string;
  value: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: CoordinatesValue;
  timezone: Timezone;
}

interface UserPayload {
  results: Result[];
  info: Info;
}
