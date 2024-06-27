import { Button } from '@faststore/ui'

export type SelfManagementPageProps = {
    onClick(): void,
    content: string,
    buttonLabel: string
}

export const SelfManagementPage = ({ content, buttonLabel, onClick }: SelfManagementPageProps) => (
    <div>
        <div>{content}</div>
        <Button onClick={onClick}>{buttonLabel}</Button>
    </div>
)