Describe(basic_encryption)
{
    It(basic_test)
    {
        Assert::That(encrypt("",1), Equals(""));
        Assert::That(encrypt("a",1), Equals("b"));
        Assert::That(encrypt("please encrypt me",2), Equals("rngcug\"gpet{rv\"og"));
    }
};