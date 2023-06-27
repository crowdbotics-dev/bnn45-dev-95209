import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vbncne_list = createAsyncThunk(
  "vbncnes/api_v1_vbncne_list",
  async payload => {
    const response = await apiService.api_v1_vbncne_list(payload)
    return response.data
  }
)
export const api_v1_vbncne_create = createAsyncThunk(
  "vbncnes/api_v1_vbncne_create",
  async payload => {
    const response = await apiService.api_v1_vbncne_create(payload)
    return response.data
  }
)
export const api_v1_vbncne_retrieve = createAsyncThunk(
  "vbncnes/api_v1_vbncne_retrieve",
  async payload => {
    const response = await apiService.api_v1_vbncne_retrieve(payload)
    return response.data
  }
)
export const api_v1_vbncne_update = createAsyncThunk(
  "vbncnes/api_v1_vbncne_update",
  async payload => {
    const response = await apiService.api_v1_vbncne_update(payload)
    return response.data
  }
)
export const api_v1_vbncne_partial_update = createAsyncThunk(
  "vbncnes/api_v1_vbncne_partial_update",
  async payload => {
    const response = await apiService.api_v1_vbncne_partial_update(payload)
    return response.data
  }
)
export const api_v1_vbncne_destroy = createAsyncThunk(
  "vbncnes/api_v1_vbncne_destroy",
  async payload => {
    const response = await apiService.api_v1_vbncne_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vbncnesSlice = createSlice({
  name: "vbncnes",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vbncne_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbncne_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbncne_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbncne_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbncne_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbncne_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vbncne_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vbncne_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vbncne_list,
  api_v1_vbncne_create,
  api_v1_vbncne_retrieve,
  api_v1_vbncne_update,
  api_v1_vbncne_partial_update,
  api_v1_vbncne_destroy,
  slice: vbncnesSlice
}
