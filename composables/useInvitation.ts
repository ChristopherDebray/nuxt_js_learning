export function useInvitation() {
    const { notifySuccess, notifyError, notifyInvitation } = useNotification();

    async function handleInvitationResponse(action: "accepted" | "refused", invitationId: number) {
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

    function displayInvitationPrompt(invitation: {
        id: number;
        senderEmail: string;
        targetType: string;
        targetName: string;
    }) {
        notifyInvitation({
            ...invitation,
            onAccept: () => handleInvitationResponse("accepted", invitation.id),
            onReject: () => handleInvitationResponse("refused", invitation.id),
        });
    }

    return { displayInvitationPrompt };
}
