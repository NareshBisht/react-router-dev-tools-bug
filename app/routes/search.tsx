import type {Route} from "./+types/search";

clientLoader.hydrate = true;

export async function clientLoader({ serverLoader, request }:Route.ClientLoaderArgs) {

  return serverLoader();
}

export default function Search() {
  return (
    <div>
      Search Page
    </div>
  );
}