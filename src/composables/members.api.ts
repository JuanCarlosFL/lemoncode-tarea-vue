import type { Member } from "@/types";
import { computed, ref, type Ref, type ComputedRef } from "vue";


export default async function useMembersApi() {
    const users: Ref<Member[]> = ref([]);

    const getMembers = async (company: string): Promise<void> => {
        users.value = await fetch(`https://api.github.com/orgs/${company}/members`).then(
            (resp) => resp.json());
    }
          
    const totalMembers: ComputedRef<number> = computed(() => users.value.length);

    return {users, totalMembers, getMembers}
}