export = Anchor;
declare function Anchor(
    name: any,
    nextInteractionNameOrFunction: any,
    nextProcessKey: any,
    createNewTab: any
): void;
declare class Anchor {
    constructor(
        name: any,
        nextInteractionNameOrFunction: any,
        nextProcessKey: any,
        createNewTab: any
    );
    _changedProperties: {};
    name: string;
    onClick: LegacyEvent;
    parameters_: any[];
    params: {};
    private logger_;
    private collection;
    private index;
    parent: any;
    process: any;
    config(nextInteractionNameOrFunction: any, nextProcessKey: any, createNewTab: any): void;
    createNewTab: boolean;
    nextInteractionName: string;
    nextProcessKey: number;
    private identifierName;
    private changed;
    private getParameters;
    private getProcessedParameters;
    label: string;
    hint: string;
    private last_parameters;
    private hasOnClickEvent;
    private accessible;
    enabled: boolean;
    permissionKeyWord: string;
    nextProcessId: string;
    validateLastInteraction: boolean;
    protected setChangedProperty(id: string, syncValue: any): void;
    private prepared;
    private _prepare;
    private getChanges;
    private _clearChangedProperties;
    private resettingProperties_;
    protected forcingChanges_(): boolean;
    private resetProperties;
    private setPropertiesDefaultValues;
    private convertParametersToParams;
    protected getParamsInfo(parametersValues: any): any[];
    clone(): Anchor;
    assign(obj: Anchor): void;
    private toString;
    private getParametersNames;
    protected propertiesToSync_: string[];
}
declare namespace Anchor {
    const createProcess: any;
}
import LegacyEvent = require('@nginstack/engine/lib/event/LegacyEvent.js');
