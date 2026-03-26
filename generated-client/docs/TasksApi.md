# TasksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tasksCompletedGet**](#taskscompletedget) | **GET** /tasks/completed | Returns all completed tasks|
|[**tasksGet**](#tasksget) | **GET** /tasks | Returns all tasks. Slow service, around 3 seconds|
|[**tasksIdCompletePost**](#tasksidcompletepost) | **POST** /tasks/{id}/complete | Completes given task, then returns modified task|
|[**tasksIdDelete**](#tasksiddelete) | **DELETE** /tasks/{id} | Deletes given task|
|[**tasksIdIncompletePost**](#tasksidincompletepost) | **POST** /tasks/{id}/incomplete | Incompletes given task, then returns modified task|
|[**tasksIdPost**](#tasksidpost) | **POST** /tasks/{id} | Updates text of given task, then returns modified task|
|[**tasksPost**](#taskspost) | **POST** /tasks | Creates task with given text, then returns created task|

# **tasksCompletedGet**
> Array<Task> tasksCompletedGet()


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

const { status, data } = await apiInstance.tasksCompletedGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Task>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasksGet**
> Array<Task> tasksGet()


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

const { status, data } = await apiInstance.tasksGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Task>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasksIdCompletePost**
> Task tasksIdCompletePost()


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let id: string; //ID of task (default to undefined)

const { status, data } = await apiInstance.tasksIdCompletePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of task | defaults to undefined|


### Return type

**Task**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | ID of task was not found |  -  |
|**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasksIdDelete**
> string tasksIdDelete()


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let id: string; //ID of task (default to undefined)

const { status, data } = await apiInstance.tasksIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of task | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | ID of task was not found |  -  |
|**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasksIdIncompletePost**
> Task tasksIdIncompletePost()


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let id: string; //ID of task (default to undefined)

const { status, data } = await apiInstance.tasksIdIncompletePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of task | defaults to undefined|


### Return type

**Task**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | ID of task was not found |  -  |
|**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasksIdPost**
> Task tasksIdPost(updateTask)


### Example

```typescript
import {
    TasksApi,
    Configuration,
    UpdateTask
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let id: string; //ID of task (default to undefined)
let updateTask: UpdateTask; //text

const { status, data } = await apiInstance.tasksIdPost(
    id,
    updateTask
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTask** | **UpdateTask**| text | |
| **id** | [**string**] | ID of task | defaults to undefined|


### Return type

**Task**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasksPost**
> Task tasksPost(createTask)


### Example

```typescript
import {
    TasksApi,
    Configuration,
    CreateTask
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let createTask: CreateTask; //text

const { status, data } = await apiInstance.tasksPost(
    createTask
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTask** | **CreateTask**| text | |


### Return type

**Task**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**422** | Bad request response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

