#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define ARGNUM 4
#define INPUT_FILE_ARG 1
#define SEARCH_STR_ARG 2
#define OUTPUT_FILE_ARG 3
#define MAX_STR_LEN 20
#define BUFFER_SIZE 100

void search_file(FILE *, FILE *, const char *);
int check_for_match(const char *, const char *, int);

int main(int argc, char *argv[]){
	FILE *in_file, *out_file;
	char *search_str;
	int retVal = 0;

	//check that args are correct
	if(argc != ARGNUM){
		printf("Incorrect number of arguments. Correct usage is count"
		" <input-filename> <search-string> <output-filename>\n");
		exit(1);
	}

	search_str = argv[SEARCH_STR_ARG];
	if(strlen(search_str) > MAX_STR_LEN){
		printf("Search string length too long. Max length is 20 bytes");
		exit(1);
	}

	//make sure you can open input file and output file
	in_file = fopen(argv[INPUT_FILE_ARG], "r");
	if(!in_file){
		printf("Error opening input file.\n");
		exit(1);
	}

	out_file = fopen(argv[OUTPUT_FILE_ARG], "w");
	if(!out_file){
		printf("Error opening output file.\n");
		exit(1);
	}

	//call function that does the actual work
	search_file(in_file, out_file, search_str);

	if(fclose(in_file)){
		printf("Error closing input file.\n");
		retVal = 1;
	}
	if(fclose(out_file)){
		printf("Error closing output file\n");
		retVal = 1;
	}

	return retVal;
}

/*
*  This function checks the file size and checks how many times the search string 
*  appears in the input file. It then outputs the results both to stdout and the output file.
*/
void search_file(FILE *in_file, FILE *out_file, const char *search_str){
	char buf[BUFFER_SIZE];
	int matchCount = 0;
	int filesize;
	int len = strlen(search_str);

	//get the filesize
	fseek(*in_file, 0, SEEK_END);
	filesize = ftell();
	fseek(*in_file, 0, SEEK_SET);

	//search for matches

}

int check_for_match(const *char str1, const *char str2, int len){

	return 0;
}