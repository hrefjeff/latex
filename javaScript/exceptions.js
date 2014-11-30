var try_example = function () 
{
	try
	{
		functionNotIsNotDefined("seven");
	}

	catch(e)
	{
		document.writeln(e.name + ": " + e.message);
	}
}