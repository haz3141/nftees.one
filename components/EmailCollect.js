import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const EmailCollect = () => {
    return (
        <div>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1">Your email</Label>
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>
                
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default EmailCollect;