
import type { UserApi, UserVM } from "@/types";
import { type Ref, ref } from "vue";

const user: Ref<UserVM> = ref({} as UserVM);

export default async function useUserApi(login: string) {
    await fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then(MapUserFromApiToVm);
    
    return {user}
}

const MapUserFromApiToVm = (apiUser: UserApi) => {
    user.value.Name = apiUser.name
    user.value.AvatarUrl = apiUser.avatar_url
    user.value.CreatedAt = apiUser.created_at
    user.value.Email = apiUser.email
    user.value.Followers = apiUser.followers
    user.value.Following = apiUser.following
    user.value.Id = apiUser.id
    user.value.Login = apiUser.login
    user.value.PublicRepos = apiUser.public_repos
}