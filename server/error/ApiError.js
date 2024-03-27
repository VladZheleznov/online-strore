class ApiError extends Error{
   constructor(status, message) {
      super();
      this.status = status;
      this.message = message;
   }

   static badrequest(message) {
      return new ApiError(404, message)
   }

   static internal(message) {
      return new ApiError(501, message)
   }

   static forbidden(message) {
      return new ApiError(403, message)
   }
}

module.exports = ApiError