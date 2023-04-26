import { Crew } from "./crew.model";

export interface Cast {
  id: number
  name: string
  profile_path: string
  character: string
}

export interface AllCast {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

