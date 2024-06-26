import { useQuery } from "@tanstack/react-query";
import { moviesApi } from "../api";

export default function useDiscover() {
  return useQuery({
    queryKey: ["discover"],
    queryFn: moviesApi.discover,
    refetchOnWindowFocus: false,
  });
}
