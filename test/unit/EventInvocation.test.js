/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventInvocation } from '../../src/EventInvocation';
import { MODULE_MAP } from '../../src/FireboltExampleInvoker';
import Transport from '@firebolt-js/sdk/dist/lib/Transport/index.mjs';

const schemaList = {
  openrpc: '1.2.4',
  info: {
    title: 'mockSchema',
    version: '1.0.0',
  },
  methods: [
    {
      name: 'mock.mockmethod',
      summary: 'Firebolt OpenRPC schema',
      params: [],
      result: {
        name: 'OpenRPC Schema',
        schema: {
          type: 'object',
        },
      },
    },
    {
      name: 'mockmodule.onnotsupported',
      params: [
        {
          name: 'listen',
          required: true,
          schema: {
            type: 'boolean',
          },
        },
      ],
      tags: [
        {
          name: 'event',
          'x-alternative': 'policy',
        },
        {
          name: 'capabilities',
          'x-uses': ['xrn:firebolt:capability:mock:mock'],
        },
      ],
      result: {
        name: 'default',
        schema: {
          anyOf: [
            {
              title: 'ListenResponse',
              type: 'object',
              required: ['event', 'listening'],
              properties: {
                event: {
                  type: 'string',
                  pattern: '[a-zA-Z]+\\.on[A-Z][a-zA-Z]+',
                },
                listening: {
                  type: 'boolean',
                },
              },
              additionalProperties: false,
            },
            {
              title: 'EventResponse',
              type: 'object',
              properties: {
                mockProperty: {
                  title: 'mockProperty',
                  $comment: 'mockCapability',
                  type: 'string',
                },
              },
            },
          ],
        },
      },
      examples: [
        {
          name: 'Acknowledgement',
          params: [
            {
              name: 'listen',
              value: true,
            },
          ],
          result: {
            name: 'Default Result',
            value: {
              mockProperty: 'mockPropertyValue',
            },
          },
        },
      ],
    },
    {
      name: 'mockmodule2.mockmethodwparam',
      tags: [
        {
          name: 'rpc-only',
        },
        {
          name: 'capabilities',
          'x-uses': ['xrn:firebolt:capability:mock:capability'],
        },
      ],
      params: [
        {
          name: 'version',
          required: true,
          schema: {
            title: 'SemanticVersion',
            type: 'object',
            properties: {
              mockSubProperty: {
                type: 'integer',
                minimum: 0,
              },
            },
            required: ['mockSubProperty'],
            additionalProperties: false,
          },
        },
      ],
      result: {
        name: 'session',
        schema: {
          type: 'object',
          required: ['version'],
          properties: {
            version: {
              type: 'object',
              properties: {
                mockSubProperty: {
                  type: 'integer',
                  minimum: 0,
                },
              },
              required: ['mockSubProperty'],
              additionalProperties: false,
            },
          },
          additionalProperties: false,
        },
      },
      examples: [
        {
          name: 'Default Example',
          params: [
            {
              name: 'version',
              value: {
                mockSubProperty: 1,
              },
            },
          ],
          result: {
            name: 'Default Result',
            value: {
              version: {
                mockSubProperty: 1,
              },
            },
          },
        },
      ],
    },
    {
      name: 'mockmodule.onmodulechanged',
      params: [
        {
          name: 'listen',
          required: true,
          schema: {
            type: 'boolean',
          },
        },
      ],
      tags: [
        {
          name: 'event',
          'x-alternative': 'policy',
        },
        {
          name: 'capabilities',
          'x-uses': ['xrn:firebolt:capability:mock:mock'],
        },
      ],
      result: {
        name: 'default',
        schema: {
          anyOf: [
            {
              title: 'ListenResponse',
              type: 'object',
              required: ['event', 'listening'],
              properties: {
                event: {
                  type: 'string',
                  pattern: '[a-zA-Z]+\\.on[A-Z][a-zA-Z]+',
                },
                listening: {
                  type: 'boolean',
                },
              },
              additionalProperties: false,
            },
            {
              title: 'EventResponse',
              type: 'object',
              properties: {
                mockProperty: {
                  title: 'mockProperty',
                  $comment: 'mockCapability',
                  type: 'string',
                },
              },
            },
          ],
        },
      },
      examples: [
        {
          name: 'Acknowledgement',
          params: [
            {
              name: 'listen',
              value: true,
            },
          ],
          result: {
            name: 'Default Result',
            value: {
              mockProperty: 'mockPropertyValue',
            },
          },
        },
      ],
    },
    {
      name: 'mockmodule.oninvalidschema',
      params: [
        {
          name: 'listen',
          required: true,
          schema: {
            type: 'boolean',
          },
        },
      ],
      tags: [
        {
          name: 'event',
          'x-alternative': 'policy',
        },
        {
          name: 'capabilities',
          'x-uses': ['xrn:firebolt:capability:mock:mock'],
        },
      ],
      result: {
        name: 'default',
        schema: {
          anyOf: [
            {
              title: 'ListenResponse',
              type: 'object',
              required: ['event', 'listening'],
              properties: {
                event: {
                  type: 'string',
                  pattern: '[a-zA-Z]+\\.on[A-Z][a-zA-Z]+',
                },
                listening: {
                  type: 'boolean',
                },
              },
              additionalProperties: false,
            },
            {
              title: 'EventResponse',
              type: 'object',
              properties: {
                mockProperty: {
                  title: 'mockProperty',
                  $comment: 'mockCapability',
                  type: 'string',
                },
              },
            },
          ],
        },
      },
      examples: [
        {
          name: 'Acknowledgement',
          params: [
            {
              name: 'listen',
              value: true,
            },
          ],
          result: {
            name: 'Default Result',
            value: {
              mockProperty: 'mockPropertyValue',
            },
          },
        },
      ],
    },
    {
      name: 'mockeventmodule.oneventmodulechanged',
      params: [
        {
          name: 'listen',
          required: true,
          schema: {
            type: 'boolean',
          },
        },
      ],
      tags: [
        {
          name: 'event',
          'x-alternative': 'policy',
        },
        {
          name: 'capabilities',
          'x-uses': ['xrn:firebolt:capability:mock:mock'],
        },
      ],
      result: {
        name: 'default',
        schema: {
          anyOf: [
            {
              title: 'ListenResponse',
              type: 'object',
              required: ['event', 'listening'],
              properties: {
                event: {
                  type: 'string',
                  pattern: '[a-zA-Z]+\\.on[A-Z][a-zA-Z]+',
                },
                listening: {
                  type: 'boolean',
                },
              },
              additionalProperties: false,
            },
            {
              title: 'EventResponse',
              type: 'object',
              properties: {
                mockProperty: {
                  title: 'mockProperty',
                  $comment: 'mockCapability',
                  type: 'string',
                },
              },
            },
          ],
        },
      },
      examples: [
        {
          name: 'Keyboard',
          params: [
            {
              name: 'listen',
              value: true,
            },
          ],
          result: {
            name: 'Default Result',
            value: {
              mockProperty: 'mockPropertyValue',
            },
          },
        },
      ],
    },
  ],
};

// Mocking $abc library and its functions

const mockFireboltExampleInvoker = {
  invoke: () => {},
};

jest.mock('../../src/utils/Utils', () => {
  const originalUtils = jest.requireActual('../../src/utils/Utils');
  return {
    ...originalUtils,
    dereferenceOpenRPC: jest.fn().mockImplementation((sdk) => {
      console.log('incoming sdk to mock: ' + sdk);
      return [schemaList, 'mocksdk'];
    }),
  };
});

let currentCallback = null;
const eventList = [];
jest.mock('../../src/FireboltExampleInvoker', () => {
  let callId = 0;
  // Mock function to clear the event from eventList once after unregistering the event
  const clearFunction = jest.fn().mockImplementation((identifier) => {
    console.log('Cleared events');
  });

  const listenFunction = jest.fn().mockImplementation((eventName, callback) => {
    currentCallback = callback;
    console.log(eventName);
    if (eventName === 'invalidevent') {
      return Promise.reject({ code: '', message: 'Method not found' });
    } else if (eventName === 'notsupported') {
      return Promise.reject({ code: -52001, message: 'Method not supported' });
    } else if (eventName === 'invalidschema') {
      return Promise.resolve({ listen: 2 });
    } else {
      if (eventName === 'onmodulechanged') {
        eventName = 'mocksdk_mockmodule.' + eventName;
      } else {
        eventName = 'mocksdk_mockeventmodule.' + eventName;
      }
      callId++;
      const id = callId; // a mock ID value
      eventList.push(eventName + '-' + id);
      return Promise.resolve(id);
    }
  });
  // Create a mock implementation for modulemap

  const mockModuleMap = {
    mocksdk: {
      mockmodule: {
        listen: listenFunction,
        clear: clearFunction,
      },
      mockeventmodule: {
        listen: listenFunction,
        clear: clearFunction,
      },
    },
  };
  return {
    get: () => {
      return mockFireboltExampleInvoker;
    },
    MODULE_MAP: mockModuleMap,
  };
});

jest.mock('../../node_modules/@firebolt-js/sdk/dist/lib/Transport/index.mjs', () => {
  let callId = 0;
  callId++;
  return {
    listen: jest.fn().mockImplementation(() => {
      console.log('Returning promise and id');
      const result = { id: callId, promise: Promise.resolve('success') };
      console.log('Returning result: ' + JSON.stringify(result));
      return result;
    }),
    send: jest.fn(),
    addEventEmitter: jest.fn(),
  };
});

jest.mock('@firebolt-js/sdk', () => {
  return {
    Lifecycle: {
      ready: () => {},
      state: () => {
        return 'initializing'; // dummy state value.
      }, // returning a Lifecycle.state object
      close: () => {},
      finish: () => {},
    },
    Parameters: {},
  };
});

jest.mock('../../src/FireboltTransportInvoker', () => {
  return {
    get: () => {
      return mockFireboltTransportInvoker;
    },
  };
});

jest.mock('../../src/pubsub/handlers/RegisterProviderHandler', () => {
  return jest.fn().mockImplementation(() => ({
    AcknowledgeChallenge: jest.fn(),
    Keyboard: jest.fn(),
    PinChallenge: jest.fn(),
  }));
});

describe('EventInvocation', () => {
  describe('clearAllListeners', () => {
    let eventInvocation;
    beforeAll(() => {
      process.env.COMMUNICATION_MODE = 'SDK';
      eventInvocation = new EventInvocation();
    });
    test('should not throw errors when no listeners are reigstered', () => {
      // check no errors when no listeners are registered
      const result = eventInvocation.clearAllListeners();
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result).toBe('No active listeners');
      expect(MODULE_MAP.mocksdk.mockmodule.clear).not.toHaveBeenCalled();
    });

    test('should clear listeners registered - has one event registered', async () => {
      const eventParams = { params: { event: 'mocksdk_mockmodule.onmodulechanged' } };
      // register listener
      let result = await eventInvocation.northBoundEventHandling(eventParams);
      expect(result.eventListenerId).toBeDefined();
      // check no errors when no listeners are registered
      result = eventInvocation.clearAllListeners();
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result).toBe('Cleared Listeners');
      expect(MODULE_MAP.mocksdk.mockmodule.clear).toHaveBeenCalled();
    });

    test('should clear listeners registered - register multiple event', async () => {
      const eventParams = { params: { event: 'mocksdk_mockmodule.onmodulechanged' } };
      // register listener
      let result = await eventInvocation.northBoundEventHandling(eventParams);
      expect(result.eventListenerId).toBeDefined();
      // register second listener listener
      const eventParams1 = { params: { event: 'mocksdk_mockeventmodule.oneventmodulechanged' } };
      const response = await eventInvocation.northBoundEventHandling(eventParams1);
      expect(response.eventListenerId).toBeDefined();
      // check no errors when no listeners are registered
      result = eventInvocation.clearAllListeners();
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(response));
      expect(result).toBe('Cleared Listeners');
      // expect(MODULE_MAP.mocksdk.mockmodule.clear).not.toHaveBeenCalled();
      expect(MODULE_MAP.mocksdk.mockmodule.clear).toHaveBeenCalled();
      expect(MODULE_MAP.mocksdk.mockeventmodule.clear).toHaveBeenCalled();
    });
  });
  describe('northBoundEventHandling and registerEvent', () => {
    let eventInvocation;
    beforeAll(() => {
      jest.clearAllMocks();
      console.log('initializing eventInvocation');
      process.env.COMMUNICATION_MODE = 'SDK';
      eventInvocation = new EventInvocation();
    });
    test('validate EventInvocation method with communicationMode SDK', async () => {
      const eventParams = { params: { event: 'mocksdk_mockmodule.onmodulechanged' } };
      const expectedResponse = {
        eventName: 'mocksdk_mockmodule.onmodulechanged',
        eventListenerId: 'mockmodule.onmodulechanged-1',
        eventListenerResponse: { listenerResponse: 1, error: null },
        eventListenerSchemaResult: { status: 'PASS', eventSchemaResult: {} },
      };
      const result = await eventInvocation.northBoundEventHandling(eventParams);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(MODULE_MAP.mocksdk.mockmodule.listen).toHaveBeenCalled();
      // expect(result.eventListenerId).toBe(expectedResponse.eventListenerId)
      expect(result.eventListenerResponse.error).toBeNull();
      expect(result.eventListenerSchemaResult.status).toEqual(expectedResponse.eventListenerSchemaResult.status);
    });

    test('should fail if not supported api returns a valid response and not error object', async () => {
      const eventParams = {
        params: { event: 'mocksdk_mockmodule.onmodulechanged' },
        isNotSupportedApi: true,
      };
      const expectedResponse = {
        eventName: 'mocksdk_mockmodule.onmodulechanged',
        eventListenerId: 'mockmodule.onmodulechanged-1',
        eventListenerResponse: { listenerResponse: 1, error: null },
        eventListenerSchemaResult: {
          status: 'FAIL',
          eventSchemaResult: {
            instance: 1,
            schema: {
              type: 'object',
              properties: { code: { type: 'number' }, message: { type: 'string' } },
              required: ['code', 'message'],
            },
            options: {},
            path: [],
            propertyPath: 'instance',
            errors: [
              {
                path: [],
                property: 'instance',
                message: 'is not of a type(s) object',
                schema: {
                  type: 'object',
                  properties: { code: { type: 'number' }, message: { type: 'string' } },
                  required: ['code', 'message'],
                },
                instance: 1,
                name: 'type',
                argument: ['object'],
                stack: 'instance is not of a type(s) object',
              },
            ],
            disableFormat: false,
          },
        },
      };
      const result = await eventInvocation.northBoundEventHandling(eventParams);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(MODULE_MAP.mocksdk.mockmodule.listen).toHaveBeenCalled();
      expect(result.eventListenerResponse.error).toStrictEqual(expectedResponse.eventListenerResponse.error);
      expect(result.eventListenerSchemaResult.status).toEqual(expectedResponse.eventListenerSchemaResult.status);
    });

    test('should pass if not supported api returns an error object', async () => {
      const eventParams = {
        params: { event: 'mocksdk_mockmodule.onnotsupported' },
        isNotSupportedApi: true,
      };
      const expectedResponse = {
        eventName: 'mocksdk_mockmodule.onnotsupported',
        eventListenerId: null,
        eventListenerResponse: {
          result: null,
          error: { code: -52001, message: 'Method not supported' },
        },
        eventListenerSchemaResult: {
          status: 'PASS',
          eventSchemaResult: {
            instance: { code: -52001, message: 'Method not supported' },
            schema: {
              type: 'object',
              properties: { code: { type: 'number' }, message: { type: 'string' } },
              required: ['code', 'message'],
            },
            options: {},
            path: [],
            propertyPath: 'instance',
            errors: [],
            disableFormat: false,
          },
        },
      };
      const result = await eventInvocation.northBoundEventHandling(eventParams);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(MODULE_MAP.mocksdk.mockmodule.listen).toHaveBeenCalled();
      expect(result.eventListenerResponse.error).toStrictEqual(expectedResponse.eventListenerResponse.error);
      expect(result.eventListenerSchemaResult.status).toEqual(expectedResponse.eventListenerSchemaResult.status);
    });

    test('validate invalid EventInvocation method with communicationMode SDK - Method not found', async () => {
      const eventParams = { params: { event: 'mocksdk_mockmodule.oninvalidevent' } };
      const expectedResponse = {
        eventName: 'mocksdk_mockmodule.oninvalidevent',
        eventListenerId: null,
        responseCode: 3,
        eventListenerResponse: { result: null, error: { code: '', message: 'Method not found' } },
        eventListenerSchemaResult: { status: 'FAIL', eventSchemaResult: {} },
      };
      const result = await eventInvocation.northBoundEventHandling(eventParams);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(MODULE_MAP.mocksdk.mockmodule.listen).toHaveBeenCalled();
      expect(result.eventListenerId).toBeNull();
      expect(result.responseCode).toBe(expectedResponse.responseCode);
      expect(result.eventListenerResponse).toStrictEqual(expectedResponse.eventListenerResponse);
      expect(result.eventListenerSchemaResult.status).toEqual(expectedResponse.eventListenerSchemaResult.status);
    });
    test('validate invalid EventInvocation method with communicationMode SDK - schema failure', async () => {
      const eventParams = { params: { event: 'mocksdk_mockmodule.oninvalidschema' } };
      const expectedResponse = {
        eventName: 'mocksdk_mockmodule.oninvalidschema',
        eventListenerId: 'mockmodule.oninvalidschema-[object Object]',
        eventListenerResponse: { result: null, error: { listen: 2 } },
        eventListenerSchemaResult: { status: 'FAIL', eventSchemaResult: {} },
      };
      const result = await eventInvocation.northBoundEventHandling(eventParams);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(MODULE_MAP.mocksdk.mockmodule.listen).toHaveBeenCalled();
      expect(result.eventListenerResponse).toStrictEqual(expectedResponse.eventListenerResponse);
      expect(result.eventListenerSchemaResult.status).toEqual(expectedResponse.eventListenerSchemaResult.status);
    });
    test('validate getEventResponse method', async () => {
      const message = { params: { event: 'lifecycle.onForeground' } };
      await eventInvocation.getEventResponse(message);
    });

    test('validate EventInvocation method with communicationMode Transport', async () => {
      process.env.COMMUNICATION_MODE = 'Transport';
      const eventParams = { params: { event: 'mocksdk_mockmodule.onmodulechanged' } };
      const expectedResponse = {
        eventName: 'mocksdk_mockmodule.onmodulechanged',
        eventListenerId: 'mockmodule.onmodulechanged-1',
        eventListenerResponse: { listenerResponse: 1, error: null },
        eventListenerSchemaResult: { status: 'PASS', eventSchemaResult: {} },
      };
      const result = await eventInvocation.northBoundEventHandling(eventParams);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(Transport.listen).toHaveBeenCalled();
      expect(result.eventListenerId).toBe(expectedResponse.eventListenerId);
      expect(result.eventListenerResponse).toStrictEqual(expectedResponse.eventListenerResponse);
      expect(result.eventListenerSchemaResult.status).toEqual(expectedResponse.eventListenerSchemaResult.status);
    });
  });

  describe('clearEventListeners', () => {
    let eventInvocation;
    beforeAll(() => {
      jest.clearAllMocks();
      console.log('initializing eventInvocation');
      process.env.COMMUNICATION_MODE = 'SDK';
      eventInvocation = new EventInvocation();
    });
    test('should call clear on the eventName and return true', () => {
      const event = 'mocksdk_mockmodule.onmodulechanged';
      const result = eventInvocation.clearEventListeners(event);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result).toBe(true);
      expect(MODULE_MAP.mocksdk.mockmodule.clear).toHaveBeenCalledWith(event.split('.')[1].slice(2));
    });

    test('should return error on issues with event name', () => {
      const event = 'onmodulechanged';
      const result = eventInvocation.clearEventListeners(event);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result.error).toBeDefined();
      expect(result.error.code).toBe('FCAError');
      expect(result.error.message).toBeDefined();
    });

    test('should return error on issues with event name', () => {
      const event = 'mockmodule.modulechanged';
      const result = eventInvocation.clearEventListeners(event);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result.error).toBeDefined();
      expect(result.error.code).toBe('FCAError');
      expect(result.error.message).toBeDefined();
    });

    test('should clear listener by sending listen false when communication mode is transport', () => {
      const event = 'mocksdk_mockmodule.onmodulechanged';
      process.env.COMMUNICATION_MODE = 'Transport';
      const result = eventInvocation.clearEventListeners(event);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result).toBe(true);
      expect(Transport.send).toHaveBeenCalledWith('mockmodule', 'onModulechanged', {
        listen: false,
      });
    });
  });

  describe('getSdkTypeAndModule', () => {
    let eventInvocation;
    beforeAll(async () => {
      jest.clearAllMocks();
      console.log('initializing eventInvocation');
      eventInvocation = new EventInvocation();
    });
    test('should return CORE as sdkType when only module.method is passed', () => {
      const [sdkType, module] = eventInvocation.getSdkTypeAndModule('mockModule.mockMethod');
      expect(sdkType).toBe('core');
      expect(module).toBe('mockmodule');
    });

    test('should return provided sdk as sdkType when  sdk_module.method is passed', () => {
      const [sdkType, module] = eventInvocation.getSdkTypeAndModule('mocksdk_mockModule.mockMethod');
      expect(sdkType).toBe('mocksdk');
      expect(module).toBe('mockmodule');
    });

    test('will return core as sdktype and module as method if only method is passed', () => {
      const [sdkType, module] = eventInvocation.getSdkTypeAndModule('mockMethod');
      expect(sdkType).toBe('core');
      expect(module).toBe('mockmethod');
    });

    test('will return module as empty and core as sdktype if no input is provided', () => {
      const [sdkType, module] = eventInvocation.getSdkTypeAndModule('');
      expect(sdkType).toBe('core');
      expect(module).toBe('');
    });
  });

  describe('getEventResponse', () => {
    let result;
    let eventInvocation;
    let eventRegistrationID;
    beforeAll(async () => {
      process.env.COMMUNICATION_MODE = 'SDK';
      jest.clearAllMocks();
      console.log('initializing eventInvocation');
      eventInvocation = new EventInvocation();
      const eventParams = { params: { event: 'mocksdk_mockmodule.onmodulechanged' } };
      const result = await eventInvocation.northBoundEventHandling(eventParams);
      eventRegistrationID = result.eventListenerId;
      console.log('printing received eventRegistrationId: ' + eventRegistrationID);
    });

    test('should return event object with null response - no event fired', async () => {
      const message = { params: { event: eventRegistrationID } };
      result = eventInvocation.getEventResponse(message);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
    });

    test('should return event object with response - single event fired', () => {
      currentCallback({ foo: 'bar1' });
      const message = { params: { event: eventRegistrationID } };
      const expectedResponse = {
        eventName: 'modulechanged',
        eventListenerId: eventRegistrationID,
        eventResponse: { foo: 'bar1' },
        eventSchemaResult: { status: 'PASS', eventSchemaResult: [] },
        eventTime: '2023-05-10T14:27:35.806Z',
      };
      result = eventInvocation.getEventResponse(message);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result).toMatchObject({
        eventName: expectedResponse.eventName,
        eventListenerId: expectedResponse.eventListenerId,
        eventResponse: expectedResponse.eventResponse,
        eventSchemaResult: expectedResponse.eventSchemaResult,
      });
      expect(result.eventTime).toBeDefined();
      expect(result.eventTime).toBeInstanceOf(Date);
    });

    test('should return event object with last response - multiple events fired', () => {
      currentCallback({ foo: 'bar2' });
      const message = { params: { event: eventRegistrationID } };
      const expectedResponse = {
        eventName: 'modulechanged',
        eventListenerId: eventRegistrationID,
        eventResponse: { foo: 'bar2' },
        eventSchemaResult: { status: 'PASS', eventSchemaResult: [] },
        eventTime: '2023-05-10T14:18:18.347Z',
      };
      result = eventInvocation.getEventResponse(message);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result).toMatchObject({
        eventName: expectedResponse.eventName,
        eventListenerId: expectedResponse.eventListenerId,
        eventResponse: expectedResponse.eventResponse,
        eventSchemaResult: expectedResponse.eventSchemaResult,
      });
      expect(result.eventTime).toBeDefined();
      expect(result.eventTime).toBeInstanceOf(Date);
    });

    test('should return only for said eventObject', () => {
      currentCallback({ foo: 'bar3' });
      const message = { params: { event: 'mockmodule.onEventChanged-1' } };
      const expectedResponse = { 'mockmodule.onEventChanged-1': null };
      result = eventInvocation.getEventResponse(message);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result).toStrictEqual(expectedResponse);
    });

    test('should return event object with null response - event not found', () => {
      const message = { params: { event: 'mocksdk_mockmodule.onEventChanged' } };
      const expectedResponse = { 'mocksdk_mockmodule.onEventChanged': null };
      result = eventInvocation.getEventResponse(message);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result).toStrictEqual(expectedResponse);
    });

    test('should return error - message has issue', () => {
      const message = { event: eventRegistrationID };
      const expectedResponse = {
        error: {
          code: 'FCAError',
          message: "Event response fetch error: Cannot read properties of undefined (reading 'event')",
        },
      };
      result = eventInvocation.getEventResponse(message);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result.error.code).toEqual(expectedResponse.error.code);
      expect(result.error.message).toBeDefined();
    });

    test('should return failure for schema', async () => {
      // register for invalid schema
      const message = { params: { event: eventRegistrationID } };
      const expectedResponse = {
        eventName: 'modulechanged',
        eventListenerId: eventRegistrationID,
        eventResponse: true,
        eventSchemaResult: {
          status: 'FAIL',
          eventSchemaResult: 'is not any of "ListenResponse","EventResponse"',
        },
        eventTime: '2023-05-11T20:34:05.219Z',
      };
      currentCallback(true);
      result = eventInvocation.getEventResponse(message);
      console.log(expect.getState().currentTestName + ' : ' + JSON.stringify(result));
      expect(result).toMatchObject({
        eventName: expectedResponse.eventName,
        eventListenerId: expectedResponse.eventListenerId,
        eventResponse: expectedResponse.eventResponse,
        eventSchemaResult: expectedResponse.eventSchemaResult,
      });
      expect(result.eventTime).toBeDefined();
      expect(result.eventTime).toBeInstanceOf(Date);
    });
  });
});
