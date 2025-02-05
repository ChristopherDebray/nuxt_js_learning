export function useInvitation() {
    const { notifySuccess, notifyError, notifyInvitation } = useNotification();

    async function handleAction(action: "accepted" | "refused", invitationId: number) {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));

            notifySuccess(
                action === "accepted" ? "Invitation Accepted" : "Invitation Rejected"
            );
        } catch (error) {
            notifyError(`The invitation couldn't be ${action}`);
        }
    }

    function inviteUser(invitation: {
        id: number;
        senderEmail: string;
        targetType: string;
        targetName: string;
    }) {
        notifyInvitation({
            ...invitation,
            onAccept: () => handleAction("accepted", invitation.id),
            onReject: () => handleAction("refused", invitation.id),
        });
    }

    return { inviteUser };
}
