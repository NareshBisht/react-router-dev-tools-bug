import type {Route} from "./+types/search";

clientLoader.hydrate = true;

export async function clientLoader() {
}

export default function Search() {
  return (
    <div>
      Search Page
    </div>
  );
}