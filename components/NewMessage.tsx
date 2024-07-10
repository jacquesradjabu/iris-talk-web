import Button from "./Button";

export default function NewMessage () {
    return (
        <div className="flex items-center justify-between sticky top-0 border-b border-gray-200 bg-white p-3">
            <h1>Messages</h1>
            <Button title="New Message" />
        </div>
    );
}