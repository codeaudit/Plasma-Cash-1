-- example dynamic request script which demonstrates changing
-- the request path and a header for each request
-------------------------------------------------------------
-- NOTE: each wrk thread has an independent Lua scripting
-- context and thus there will be one counter per thread

counter = 0

request = function()
   wrk.headers["test"] = counter
   counter = counter + 1
   return wrk.format(wrk.method,nil,wrk.headers,wrk.body)
end
