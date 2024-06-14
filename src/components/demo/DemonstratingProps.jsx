//This set of components demonstrates prop-types and eslint support around props
//You can delete the contents of components/demo

import { Team } from "./Team";

export function DemonstratingProps() {
    return (
        <div>
            <h2>Demonstrating props</h2>
            <Team title="Blue team" scores={[10, 20]} />
            <Team title="Red team" scores={[99, -20]} subtitle="hosts" />
        </div>
    );
}
