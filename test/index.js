var demand = require("must");
var Restful = require("../");

describe("connect-restful-sequelize", function(){
	it("must require the module", function(){
		Restful.must.exist();
	});

	it.skip("must provide a findById method", function(){

	});

	describe("that provides a findOne method", function(){
		it.skip("must return the record that matches the id", function(){

		});
	});

	it.skip("must provide a findOne method", function(){
		
	});

	describe("that provides a findOne method", function(){
		it.skip("must return a record if one exists", function(){

		});

		it.skip("must accept a 'where' option and return a record that matches", function(){

		});

		it.skip("must accept an 'order' option and return the first record in that order", function(){

		});
	});

	it.skip("must provide a findAll method", function(){
		describe("that provides a findAll method", function(){
			it.skip("must return all records that exists", function(){

			});

			it.skip("must accept a 'where' option and return all records that match", function(){

			});

			it.skip("must accept an 'order' option and return all records in that order", function(){

			});

			it.skip("must accept a 'limit' option and return that many records", function(){

			});

			it.skip("must accept a 'where' option and an 'order' options return all records that match in that order", function(){

			});

			it.skip("must accept a 'where', 'order', and 'limit' options and return that number of records that match in that order", function(){

			});

		});		
	});

	it.skip("must provide a create method", function(){
		
	});

	describe("that provides a create method", function(){
		it.skip("must return a record after it is created", function(){

		});
	});

	it.skip("must provide an update method", function(){
		
	});

	describe("that provides an update method", function(){
		it.skip("must return a record after it is updated", function(){

		});
	});

	it.skip("must provide an delete method", function(){
		
	});

	describe("that provides an delete method", function(){
		it.skip("must not return a record after it is deleted", function(){

		});
	});
});