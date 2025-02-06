export function useNotification() {
    const toast = useToast();

    function notifySuccess(title: string, description?: string) {
        toast.add({
            title,
            description,
            color: "green",
            icon: "material-symbols:check-circle-rounded",
        });
    }

    function notifyError(description: string, title = "An error has occurred") {
        toast.add({
            title,
            description,
            color: "red",
            icon: "material-symbols:dangerous-rounded",
        });
    }

    function notifyInfo(title: string, description?: string, actions?: any[]) {
        toast.add({
            title,
            description,
            color: "blue",
            icon: "material-symbols:info-rounded",
            actions,
        });
    }

    function notifyInvitation(invitation: {
        id: number;
        senderEmail: string;
        targetType: string;
        targetName: string;
        onAccept: () => void;
        onReject: () => void;
    }) {
        toast.add({
            id: "invite",
            title: "New invitation",
            description: `${invitation.senderEmail} invited you to ${invitation.targetType}: ${invitation.targetName}`,
            icon: "material-symbols:mail-rounded",
            color: "blue",
            timeout: 10000,
            actions: [
                {
                    label: "Accept",
                    click: () => {
                        toast.remove("invite");
                        invitation.onAccept(); // Calls the accept handler
                    },
                },
                {
                    label: "Reject",
                    click: () => {
                        toast.remove("invite");
                        invitation.onReject(); // Calls the reject handler
                    },
                },
            ],
        });
    }

    return { notifySuccess, notifyError, notifyInfo, notifyInvitation };
}
